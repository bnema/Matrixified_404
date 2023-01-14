# Matrixified 404
This is a simple Express server who render a 404 page with cool matrix (revisited) effect

Is it mostly used as a quick deploy and placeholder for a website that is under construction.

## What it does

  - Start a Express server on port 3000 or the port specified in the environment variable EXPRESS_PORT
  - Render a page with a cool matrix animation effect 
  - By default, the page is rendered with JetBrains Mono Nerd font (for cool icons) but if you are limited to sans-serif fonts it will switch to classic UTF-8 symbols automatically
  - Relieve your frustration by spam clicking the 404 element

## Deploying

- A Dockerfile is provided to build a Docker image.

To build the image, clone the repository and run the following command:
```bash
docker build -t matrixified-404 .
```

- You can also deploy the project to Heroku by clicking the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy/?template=github.com/bnema/matrixified-404)

## Screenshot & Demo

![Screenshot](https://raw.githubusercontent.com/bnema/Matrixified_404/main/screenshot.png)


- You can see a demo using JetBrains Mono Nerd font (for cool icons) here : [https://404.bnema.dev/](https://404.bnema.dev/)
- You can see a demo using the sans-serif alternative on github pages: [https://bnema.github.io/Matrixified_404/public/index.html](https://bnema.github.io/Matrixified_404/public/index.html)



## Customizing

You can customize the animation by modifying the JavaScript code and the CSS styles. For example, you can change the duration and delay of the animation, or the colors and fonts used.

## License

This project is licensed under the Apache 2.0 License.

## Author

This project is created by [bnema](https://github.com/bnema)

## Note

This 404 page is not compatible with Internet explorer.