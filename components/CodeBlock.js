// src/CodeBlock.js
import theme from "prism-react-renderer/themes/github";
import Highlight, { defaultProps } from 'prism-react-renderer'
import { Pre, Line, LineNo, LineContent } from "../styles/code-styles";


/**
 */
function CodeBlock({ children, language = 'python', code, linenumber = true }) {
    return (
        <div>
            <Highlight {...defaultProps} theme={theme} code={code} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (

                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (

                            <Line key={i} {...getLineProps({ line, key: i })}>

                                {linenumber && <LineNo>{i + 1}</LineNo>}

                                <LineContent>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))}
                                </LineContent>

                            </Line>

                        ))}
                    </Pre>
                )}
            </Highlight>
            <div>
                {children}
            </div>
        </div>
    )
}

export default CodeBlock