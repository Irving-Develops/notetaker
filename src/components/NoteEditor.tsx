import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import {markdown, markdownLanguage} from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export const NoteEditor = ({
    onSave
}: {
    onSave: (note: {title: string; content: string}) => void;
}) => {
    const [code, setCode] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    return (
        <div className="card mt-5 border border0gray-200 bg-base-100 shadow">
            <div className="card-body">
                <h2 className="card-title">
                    <input 
                    type="text" 
                    placeholder="note title"
                    className="input-primary input input-lg w-full font-bold"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                </h2>
                <CodeMirror
                    value={code}
                    onChange={(value) => setCode(value)}
                    height="30vh"
                    width="500px"
                    minWidth="100%"
                    minHeight="30vh"
                    extensions={[
                        markdown({base: markdownLanguage, codeLanguages: languages}),
                    ]}
                />
            </div>
            <div className="card-actions justify-end">
                <button className="btn btn-primary"
                onClick={()=> {
                    onSave({title, content: code});
                    setCode("");
                    setTitle("");
                }}
                disabled={title.trim().length === 0 || code.trim().length === 0}
                >
                    Save
                </button>
            </div>
        </div>
    )
}