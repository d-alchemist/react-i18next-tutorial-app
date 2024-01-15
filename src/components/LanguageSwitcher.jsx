import { useTranslation } from "react-i18next";

const languages = [
  { text: "English", value: "en" },
  { text: "French", value: "fr" },
]

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className="justify-end">
      <select defaultValue={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
        {
          languages.map((language) => <option key={language.value} value={language.value}>{language.text}</option>)
        }
      </select>
    </div>
  )
}

export default LanguageSwitcher;