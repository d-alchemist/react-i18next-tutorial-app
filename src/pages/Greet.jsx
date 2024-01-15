import { Link } from "react-router-dom"
import LanguageSwitcher from "../components/LanguageSwitcher"
import { useTranslation } from "react-i18next"

function Greet() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <LanguageSwitcher />
        <h1>{t("greet.hello")}</h1>
        <p>{t("greet.howWeSay")}*</p>
        <Link to="/">
          <button>{t("greet.goBack")}</button>
        </Link>
      </div>
    </>
  )
}

export default Greet
