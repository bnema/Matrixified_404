# Nerd Digital Rain Effect - 404 Page 

![GitHub license](https://img.shields.io/github/license/bnema/nerd-digital-rain-404)

This is a simple Express server that renders a 404 page with a revisited version of the iconic "Matrix code" using Nerd Font icons and Kakatana symbols.

It is mostly used as a quick deploy and placeholder for a website that is under construction.

## What it does

- Starts an Express server on port 3000 or the port specified in the environment - variable EXPRESS_PORT
- Renders a page with a cool matrix animation effect
- Allows you to relieve your frustration by spam clicking the 404 element

By default, the page is rendered with JetBrains Mono Nerd Font (stored in assets) for the cool icons and also uses Kakatana symbols (from any UTF-8 font) to stay true to the matrix theme. 
In case JetBrains Mono Nerd Font is not installed on the client or cannot be loaded, the page will fallback to Kakatana symbols only (like on GitHub Pages).
## Deploying

- A Dockerfile is provided to build a Docker image. To build the image, clone the repository and run the following command:
```bash
docker build -t nerd-digital-rain-404 .
```
## Screenshot & Demo

![Screenshot](https://raw.githubusercontent.com/bnema/nerd-digital-rain-404/main/public/assets/screenshot.png)

- You can see a demo using only Kakatana symbols on GitHub Pages : [https://bnema.github.io/nerd-digital-rain-404/public/index.html](https://bnema.github.io/nerd-digital-rain-404/public/index.html)

## Customizing

For easier deploying or needs, the entire html, css and js code are in one document (index.html) and can be easily modified to suit your needs.

## License

This project is licensed under the Apache 2.0 License. The inspiration for this project comes from the iconic "Matrix code" effect popularized by the 1999 science fiction film "The Matrix" directed by the Wachowski siblings and created by visual effects supervisor John Gaeta and his team at Manex Visual Effects. However, my additions such as animation font variant, icons and color scheme are original works created by me, and not associated with the original matrix effect. If anyone wishes to use this idea, please credit me and link to this repository.

## Author

This project is created by [bnema](https://github.com/bnema)
