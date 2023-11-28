import { useState } from "react";
import { marked } from "marked";
import "./index.scss";
function App() {
    const [state, setState] = useState(`# H1
## H2
(title)(https://example.com)
\`code\`
\`\`\`
{
  "firstName": "Whales cum",
  
}
\`\`\`

- First item
- Second Item

>blockquote

![alt text](image.jpg)

**bold text**
    `);
    const handleChanges = (e) => {
        setState(e.target.value);
    };

    return (
        <div className="App">
            <div className="marker">
                <label htmlFor="editor" className="label">
                    Editor
                </label>
                <textarea
                    className="textarea"
                    id="editor"
                    name="editor"
                    onChange={handleChanges}
                    value={state}
                ></textarea>
            </div>
            <div className="preview">
                <label htmlFor="editor" className="label">
                    Preview
                </label>
                <div
                    id="preview"
                    className="textarea"
                    dangerouslySetInnerHTML={{
                        __html: marked(state),
                    }}
                ></div>
            </div>
        </div>
    );
}

export default App;
