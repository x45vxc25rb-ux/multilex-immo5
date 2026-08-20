# Multilex Immobilien — сайт

Стек: Next.js 14 (App Router) + React + TypeScript + Tailwind CSS + Framer Motion.

## Запуск проекта

```bash
npm install
npm run dev
```

Сайт откроется на http://localhost:3000

Сборка для продакшена:

```bash
npm run build
npm run start
```

## Где что менять

Полное описание — в ответе в чате (на русском). Кратко:

- Телефон / e-mail / адрес → `data/companyInfo.ts`
- Объекты недвижимости (добавление/удаление/фото/цена/адрес/описание) → `data/properties.ts`
- Фотографии объектов → `public/properties/`
- Немецкие тексты секций → соответствующий компонент в `components/`
- Impressum / Datenschutz → `app/impressum/page.tsx`, `app/datenschutz/page.tsx`
