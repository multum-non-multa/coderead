// src/CodeBlock.js
import theme from "prism-react-renderer/themes/github";
import Highlight, { defaultProps } from 'prism-react-renderer'
import { Pre, Line, LineNo, LineContent } from "../styles/code";



const example_code = `
    def f():
        return 0
`

/**
 * ! Had to pass code as a special prop and not in children because lines were not breaking
 * todo : need to style the children as a sort of optional caption
 */
function CodeBlock({ children, language, code }) {
    return (
        <div>
            <Highlight {...defaultProps} theme={theme} code={code} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (

                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (

                            <Line key={i} {...getLineProps({ line, key: i })}>

                                <LineNo>{i + 1}</LineNo>

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