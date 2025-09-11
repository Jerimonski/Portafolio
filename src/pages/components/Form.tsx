import { useRef, useState, type FormEvent, type PropsWithChildren } from "react"
import toast from "react-hot-toast"

interface FormValues {
  name: string
  namePlaceholder: string
  emailPlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
  lang: string
}

const ContactForm = ({
  children,
  name,
  namePlaceholder,
  emailPlaceholder,
  message,
  messagePlaceholder,
}: PropsWithChildren<FormValues>) => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const loading = toast.loading("Guardando mensaje...")
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const res = await response.json()

      if (!res.ok) {
        console.log("Something went wrong: ", res)
        toast.dismiss(loading)
        toast.error(res.message)
      } else {
        toast.dismiss(loading)
        toast.success("¡Mensaje enviado!")
      }

      setIsLoading(false)
      form.current?.reset()
    } catch (error) {
      console.log("Something went very wrong: ", error)
      toast.dismiss(loading)
      toast.error("Ha ocurrido un error, inténtalo más tarde.")
      setIsLoading(false)
    }
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 [&>label>input]:border-gray-label [&>label>input]:w-full [&>label>input]:rounded-xl'
    >
      <label htmlFor='name'>
        {name}
        <input
          id='name'
          name='name'
          placeholder={namePlaceholder}
          className='border p-2 my-2 rounded'
          required
        />
      </label>
      <label htmlFor='email'>
        Email
        <input
          id='email'
          name='email'
          type='email'
          placeholder={emailPlaceholder}
          className='border p-2 my-2 rounded'
          required
        />
      </label>

      <label htmlFor='message'>{message}</label>
      <textarea
        id='message'
        name='message'
        placeholder={messagePlaceholder}
        className='border-2 p-2 h-full my-2 w-full border-gray-label rounded-lg'
        required
      />
      <div>{children}</div>
    </form>
  )
}

export default ContactForm
