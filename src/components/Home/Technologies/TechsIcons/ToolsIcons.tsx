export const GitIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
    <path
      fill='#F34F29'
      d='M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z'
    />
  </svg>
)
export const NPMIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
    <path
      fill='#cb3837'
      d='M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z'
    />
  </svg>
)
export const JiraIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
    <defs>
      <linearGradient
        id='jira-original-a'
        gradientUnits='userSpaceOnUse'
        x1='22.034'
        y1='9.773'
        x2='17.118'
        y2='14.842'
        gradientTransform='scale(4)'
      >
        <stop offset='.176' stop-color='#0052cc' />
        <stop offset='1' stop-color='#2684ff' />
      </linearGradient>
      <linearGradient
        id='jira-original-b'
        gradientUnits='userSpaceOnUse'
        x1='16.641'
        y1='15.564'
        x2='10.957'
        y2='21.094'
        gradientTransform='scale(4)'
      >
        <stop offset='.176' stop-color='#0052cc' />
        <stop offset='1' stop-color='#2684ff' />
      </linearGradient>
    </defs>
    <path
      d='M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0'
      fill='#2684ff'
    />
    <path
      d='M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0'
      fill='url(#jira-original-a)'
    />
    <path
      d='M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0'
      fill='url(#jira-original-b)'
    />
  </svg>
)

export const Icons = {
  Tools: [
    { name: "Git", icon: GitIcon },
    { name: "Figma", icon: NPMIcon },
    { name: "Jira", icon: JiraIcon },
  ],
}
