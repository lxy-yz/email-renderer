import React from 'react'
import { PageContextBuiltIn } from 'vite-plugin-ssr'
import { navigate } from 'vite-plugin-ssr/client/router'
import { Counter } from '../../components/Counter'

export default { Page: EmailTemplatePage }
export { onBeforeRender }

function EmailTemplatePage({ templateData }: { templateData: Record<string, unknown> }) {
  return (
    <>
      <code>
        {JSON.stringify(templateData, null, 4)}
      </code>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <p>
        We <code>export const clientRouting = true</code> to enable Client Routing.{' '}
        <button
          onClick={() => {
            const randomIndex = Math.floor(Math.random() * 3)
            navigate(['/markdown', '/star-wars', '/hello/alice'][randomIndex])
          }}
        >
          Random Page
        </button>
      </p>
    </>
  )
}

async function onBeforeRender(pageContext: PageContextBuiltIn & { data: Record<string, unknown> }) {
  console.log('context', pageContext);

  const { data } = pageContext

  const pageProps = { templateData: { data } }

  return {
    pageContext: {
      pageProps
    }
  }
}