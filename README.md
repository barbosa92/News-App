This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Herramientas utilizadas en este proyecto:
-   Pico.css para añadir estilos mediante framework?

Apuntes:
-   El componente Link de Next nos permite navegar entre páginas como "Single Page Application", de modo que cuando cambiamos de página, el navegador solo carga el archivo que necesita en lugar de recargar toda la aplicación con el JS. Al hacerse así debe hacer uso del "History.push"
-   Para navegar entre páginas no utilizar NUNCA un "Router.push". Utilizar un Link en esos casos. En las únicas ocasiones en que tiene sentido es cuando se trata de una navegación programática, como cuando queremos hacer login, ya que queremos enviar al usuario allí como respuesta de una acción del mismo.
-   Next permite realizar client y server side rendenring al mismo tiempo. Permitiendo que la página se renderice en el servidor y sea más favorable para temas de SEO ya que Google solo tendrá que leer el HTML, en lugar de tener que descargar tu JS, levantar un servidor para renderizar tu página y después leerlo. Ver este vídeo para profundizar(https://www.youtube.com/watch?v=YfkJyRFvP1s)
-   El fetching de datos en el servidor siempre se va a realizar más rápido que en el cliente.
-   Hidratar:? (Al hacer fetching en el lado del seridor, se pasa la información al cliente como un objeto Curso Next.js 12 -> 56:09 )
-   <Image> Es recomendable especificar el width y el height para que ocupe solo el tamaño de la imagen y no de saltos en el contenido (Curso Next.js 12 -> 1:25:32), esto es importante para el CLS (Cumule Layout Shift)
