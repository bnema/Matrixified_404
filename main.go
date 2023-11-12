package main

import (
	"html/template"
	"io"
	"os"

	"github.com/labstack/echo/v4"
	// .env autoload
	_ "github.com/joho/godotenv/autoload"
)

type Template struct {
	templates *template.Template
}

type Data struct {
	Title  string
	Button string
	Span   string
	URL    string
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func main() {
	t := &Data{
		Title:  os.Getenv("TITLE"),
		Button: os.Getenv("BUTTON"),
		Span:   os.Getenv("SPAN"),
		URL:    os.Getenv("URL"),
	}

	e := echo.New()

	tpl := &Template{
		templates: template.Must(template.ParseGlob("public/*.html")),
	}

	e.Renderer = tpl

	e.GET("/", func(c echo.Context) error {
		return c.Render(200, "index.html", t)
	})

	e.Static("/", "public")
	e.Logger.Fatal(e.Start(":3030"))
}
