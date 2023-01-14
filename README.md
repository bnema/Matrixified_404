# Matrixified 404
This is a simple Express server who render a 404 page with cool matrix (revisited) effect

It is mostly used as a quick deploy and placeholder for a website that is under construction.

This is a simple Express server that serves a 404 error page that features a cool matrix animation effect, built with HTML, CSS, and JavaScript. It uses [Tailwind CSS](https://tailwindcss.com/) for styling and [Font Awesome](https://fontawesome.com/) as default icon font.

## What it does

1 - Start a Express server on port 3000 or the port specified in the environment variable EXPRESS_PORT
2 - Render a 404 page with a cool matrix animation effect

## Deploying

- A Dockerfile is provided to build a Docker image.

To build the image, clone the repository and run the following command:
```bash
docker build -t matrixified-404 .
```

- You can also deploy the project to Heroku by clicking the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


## Customizing

You can customize the animation by modifying the JavaScript code and the CSS styles. For example, you can change the duration and delay of the animation, or the colors and fonts used.

## License

This project is licensed under the Apache 2.0 License.

## Author

This project is created by [bnema](https://github.com/bnema)

## Note

This 404 page is not compatible with Internet explorer.