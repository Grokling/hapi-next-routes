# Custom server using Hapi example with next-routes

## How to use

### Using `create-next-app`

### Download manually

Download the example:

```bash
git clone https://github.com/grokling/hapi-next-routes.git
cd hapi-next-routes
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Most of the times the default Next server will be enough but sometimes you want to run your own server to customize routes or other kind of the app behavior. Next provides a [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) so you can customize as much as you want.

Because the Next.js server is just a node.js module you can combine it with any other part of the node.js ecosystem. in this case we are using [Hapi](https://hapijs.com) to resolve some proxying port headaches between different back-end services - particularly during development. We're also using next-routes to provide parameterized routing for Next.

The example shows a server that serves the component living in `pages/a.js` when the route `/aaa` is requested and `pages/b.js` when the route `/bbb` is accessed. This is obviously a non-standard routing strategy. You can see how this custom routing is being made inside `hapiRoutes.js`, and `nextRoutes.js`.
