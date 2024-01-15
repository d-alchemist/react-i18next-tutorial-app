import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../components/LanguageSwitcher'

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <LanguageSwitcher />
        <p>{t("title")}</p>
        <Link to="/greet">
          <button>{t("sayHello")}</button>
        </Link>
      </div>
    </>
  )
}

export default Home
