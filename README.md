# Nerd Digital Rain Effect

This project is a simple Go HTTP server using Echo v4. It displays a placeholder page with a Matrix-inspired animation effect. It use environment variables as data and render it in the page. Simple.

## What it does

- Starts a Go HTTP server on port 3030
- Renders a page with a cool matrix animation effect

By default, the page is rendered with JetBrains Mono Nerd Font (stored in assets) for the cool icons and also uses Kakatana symbols (from any UTF-8 font) to stay true to the matrix theme. 
In case JetBrains Mono Nerd Font is not installed on the client or cannot be loaded, the page will fallback to Kakatana symbols only (like on GitHub Pages).
## Deploying

```bash
 docker buildx build --push --platform linux/amd64 -t ghcr.io/yourname/yourrepo .
```
## Demo

- You can see a 404 demo using only Kakatana symbols on GitHub Pages : [https://bnema.github.io/nerd-digital-rain/public/index.html](https://bnema.github.io/nerd-digital-rain-404/public/404.html)

## License

This project is licensed under the Apache 2.0 License. The inspiration for this project comes from the iconic "Matrix code" effect popularized by the 1999 science fiction film "The Matrix" directed by the Wachowski siblings and created by visual effects supervisor John Gaeta and his team at Manex Visual Effects. However, my additions such as animation font variant, icons and color scheme are original works created by me, and not associated with the original matrix effect. If anyone wishes to use this idea, please credit me and link to this repository.

## Author

This project is created by [bnema](https://github.com/bnema)
