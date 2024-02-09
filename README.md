This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


1. [x] Поиск, который в layout/header, при активации, вместе с предложенными вариантами ответа, должен перекрывать остальные элементы на странице.
2. [x] Заблокировать прокрутку страницы при открытии меню
3. [x] Добавить иконку «пролистать вверх» на все страницы. Иконка должна появляться, если пролистано 100vh
4. Добавить кнопку «Добавить страницу на рабочий стол»
5. Дополнить инструкцию на главном экране для новой функции (четвертый пункт )
6. В 18 часов на страницах 1 и 2 должен быть показан завтрашний день ( к примеру: во вторник 19:00 на странице показана среде, в субботу остается суббота, в воскресенье с самого утра показан понедельник ) на страницах 3 и 4 пролистывать до завтрашнего дня, исключение: в субботу до конца суток пролистывать до субботы, если расписание не изменилось ( это можно увидеть по датам ), если изменилось, то листать до понедельника. В воскресенье тоже самое ( в воскресенье если не изменилось, то до субботы, если изменилось, то до понедельника )
   1. Кабинеты по преподавателю
   2. Кабинеты по группе
   3. Расписание группы
   4. Расписание преподавателя




В 18 часов на страницах 1 и 2 должен быть показан завтрашний день (к примеру: во вторник 19:00 на странице показана среде, в субботу остается суббота, в воскресенье с самого утра показан понедельник ) 
1. Кабинеты по преподавателю
2. Кабинеты по группе

на страницах 3 и 4 пролистывать до завтрашнего дня,
исключение:

в субботу если расписание не изменилось (это можно увидеть по датам), то пролистывать до субботы, если изменилось, то листать до понедельника. 

В воскресенье тоже самое (в воскресенье если не изменилось, то до субботы, если изменилось, то до понедельника )

3. Расписание группы
4. Расписание преподавателя


