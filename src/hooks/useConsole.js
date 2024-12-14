import { useState } from "react";
import { LANG_VERSIONS } from "../utils/constants"; // Импорт констант с версиями языков

const useConsole = (code, language) => {
  // Состояние для вывода программы
  const [output, setOutput] = useState("");
  // Состояние для индикатора загрузки (пока код выполняется)
  const [isLoading, setIsLoading] = useState(false);

  // Функция для выполнения кода
  const runCode = async () => {
    try {
      // Сбрасываем вывод и ставим индикатор загрузки в true
      setOutput("");
      setIsLoading(true);

      const API_URL = "https://emkc.org/api/v2/piston/execute";

      const fetchdata = {
        language: language.language.name, // Указываем название языка из переданного объекта `language`
        version: LANG_VERSIONS[language.language.name], // Версия языка из константы `LANG_VERSIONS`
        files: [
          {
            content: code, // Код, который необходимо выполнить
          },
        ],
      };

      const response = await fetch(API_URL, {
        method: "POST", 
        body: JSON.stringify(fetchdata),
      });

      const data = await response.json();

      // Устанавливаем полученный вывод программы в состояние output
      setOutput(data.run.output);
      // Останавливаем индикатор загрузки
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return { output, isLoading, runCode };
};

export default useConsole;
