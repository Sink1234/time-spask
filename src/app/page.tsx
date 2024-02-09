import 'server-only'
import styles from './page.module.css'
import ApplicationInstallButton from "@/components/ui/ApplicationInstallButton/ApplicationInstallButton";

export default async function HomePage() {
    return (
        <div>
            <section className={styles.section}>
                <h1>
                    Как пользоваться сайтом-расписание <span>СПАСК</span>а?
                </h1>
                <div>
                    Основная работа ведется через поисковую
                    модель со значком <span>“лупа” </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M9.86816 10.8293L13.8642 15.3373" stroke="#1D5770" strokeWidth="3"
                              strokeLinecap="round"/>
                        <circle cx="6.38953" cy="6.38953" r="4.88953" stroke="#1D5770" strokeWidth="3"/>
                    </svg>
                    <br/>
                    При ее нажатии открывается <span>поиск</span> и вы можете
                    ввести свою <span>группу</span>, либо <span>фамилию
            преподавателя.</span>
                </div>
                <div>
                    В правом верхнем углу есть <span>меню </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <line x1="2" y1="2" x2="17.9993" y2="2" stroke="#1D5770" strokeWidth="4" strokeLinecap="round"/>
                        <line x1="2" y1="7.90881" x2="17.9993" y2="7.90881" stroke="#1D5770" strokeWidth="4"
                              strokeLinecap="round"/>
                        <line x1="12" y1="13.8177" x2="17.9996" y2="13.8177" stroke="#1D5770" strokeWidth="4"
                              strokeLinecap="round"/>
                    </svg>
                    <br/> в котором вы можете посмотреть:
                    <ul>
                        <li>Основное расписание на семестр</li>
                        <li>Страница кабинетов по преподавателям и группам</li>
                        <li>Поиск по кабинетам</li>
                        <li>Рабочая неделя, которая сейчас на сайте</li>
                    </ul>
                </div>

                <div>
                    <div>Установить как приложение</div>
                    <ApplicationInstallButton />
                </div>
            </section>
        </div>
    )
}
