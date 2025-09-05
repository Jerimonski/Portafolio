import { column, defineDb, defineTable } from "astro:db"

const Pics = defineTable({
  columns: {
    imageUrl: column.text(),
    description: column.text(),
  },
})

const EmailMessage = defineTable({
  columns: {
    messageId: column.text(),
    name: column.text(),
    email: column.text(),
    message: column.text(),
  },
})

export default defineDb({
  tables: { Pics, EmailMessage },
})
