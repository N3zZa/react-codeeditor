import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "./MainEditor.css";
import Console from "../Console/Console";

const MainEditor = ({ language }) => {
  // Получаем сохранённое состояние из localStorage или устанавливаем пустую строку по умолчанию
  const [code, setCode] = useState(() => {
    const savedCode = localStorage.getItem("code");
    return savedCode ? savedCode : "// Напиишите ваш код здесь\n\n";
  });

  // Сохраняем код в localStorage всякий раз, когда он изменяется
  useEffect(() => {
    if (code) {
      localStorage.setItem("code", code); // Сохраняем в localStorage
    }
  }, [code]); // Этот эффект сработает каждый раз, когда `code` изменится

  return (
    <div className="editor_container">
      <div className="editor_inner">
        {/* блок задачи */}
        <div className="task_block">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            mollitia voluptatum, voluptatibus modi laudantium explicabo libero?
            Iste veniam error eum delectus totam, doloremque animi deleniti
            doloribus nemo quis officia suscipit labore asperiores quia iure
            tempora ab assumenda odit. Consequatur modi natus fugit voluptatem
            labore placeat nobis nulla laudantium eum sint.
          </p>
        </div>
        {/* ----------- */}

        {/* блок редактора кода */}
        <div className="editor">
          <CodeMirror
            height="60vh"
            value={code}
            extensions={[language]}
            onChange={(value) => setCode(value)}
            theme="dark"
          />
          {/* ------------------ */}

          {/* блок консоли */}
          <Console code={code} language={language} />
          {/* ------------ */}
        </div>
      </div>
    </div>
  );
};

export default MainEditor;
