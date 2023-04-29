import '@/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlock, CopyBlock, atomOneDark } from 'react-code-blocks';

export default function App({ Component, pageProps }) {
  const Header = ({ children }) => {
    return <div className='font-bold mb-2 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 '>
      {children}
    </div>

  }

  const SubHeader = ({children}) => {
    return <div className='font-bold text-2xl'>
    {children}
  </div>
  }
  const CustomCodeBlock = (props) => {
    const { className, copy, children } = props;
    const language = className.match(/(?<=language-)(\w.*?)\b/) != null
      ? className.match(/(?<=language-)(\w.*?)\b/)[0]
      : "javascript";

    return copy ? (
      <CopyBlock
        text={children}
        language={language}
        theme={atomOneDark}
        wrapLines
        codeBlock
      />
    ) : (
      <CodeBlock text={children} language={language} theme={atomOneDark} wrapLines />
    );
  };


  const components = {
    h1: Header,
    h2: SubHeader,
    code: (props) => <div className='my-5'><CustomCodeBlock {...props} /></div>,
  }
  return <MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>
}
