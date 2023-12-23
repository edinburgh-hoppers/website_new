# Edinburgh Hoppers Website

- [Intro](#intro)
- [Start here](#start-here)
  - [Jekyll installation](#jekyll-installation)
  - [Running the web server](#running-the-web-server)
- [File structure](#file-structure)
- [Format](#format)
- [Editing data](#editing-data)
  - [Team members](#team-members)
  - [Big events](#big-events)
  - [Sponsors](#sponsors)

## Intro

The website runs on [**Jekyll**](https://jekyllrb.com/). This means it's relatively easy to work with collaboratively, and it's possible to make the pages look and feel consistent across the whole of the website with the use of **templates**.

## Start here

First, clone this repository on your computer. To check for any updates, use GitHub Desktop or, using the terminal,
```
git fetch
git pull
```
(only `git pull` if there are no conflicts with your local repository!)

**You are strongly suggested to have a look at the [Jekyll documentation](https://jekyllrb.com/docs/home/) and familiarise yourself with it.**

### Jekyll installation

Please refer to [these instructions](https://jekyllrb.com/docs/installation/) to install Jekyll on your own machine.

### Running the web server

Jekyll runs a server on your local machine that will allow the website to be viewed on your web browser by navigating to, by default, the following address: [localhost:3500](http://localhost:3500) (aka [127.0.0.1:3500](http://127.0.0.1:3500))

> Note the address/port on your server might be different - if they are, don't worry, jekyll should display them on the terminal.

This can be done by navigating to the repository in your terminal and issuing the following command:
```
bundle exec jekyll serve
```

## File structure

 - `_pages`: this is where all the main pages of our website are defined. All of them mainly contain [front matter](https://jekyllrb.com/docs/front-matter/), and the majority of code goes in the \_layouts and \_includes folder. Most front matter contains a layout variable, which chooses a template from the \_layouts folder to implement.
 - `_layouts`: contains the structure of our pages. A lot of variables in [Liquid](https://shopify.github.io/liquid/basics/introduction/) are present, so brushing up on how Liquid works is highly recommended.
 - `_includes`: contains sections of the websites that can be added onto a main page. This helps separate parts of a website into individual functionality. Each file is a .html file. These files can be included using the include keyword.
 - `_data`: contains .yml files that holds all data files that are used in our website.
 - `assets`: contains images, stylesheets, and script files that are used in the website. Stylesheets have the extension .scss, which is the [Sass](https://sass-lang.com/guide) preprocessor for CSS. Script files are in JavaScript. Additionally, we also use [Bootstrap](https://getbootstrap.com/) to style our website.

## Format

Some tips to keep format consistent everywhere -
- In CSS, comment what page that section of code is for, and keep all global styles on the top of the document.
- HTML: Indent code properly. Also, please use good, well explained names for classes/id, use newline after a tag of a big block of code, but for single line paras or links, same line is okay?
```
    <div>
      <a>Hello</a>
    </div>
 ```
**PLEASE ADD/REMOVE ITEMS TO THIS LIST TO KEEP THE CODE CONSISTENT AND READABLE**

## Editing data

To keep the website up to date, the information under the \_data folder must be updated regularly.

### Team members

Open `team.yml` under the `_data` folder. This file contains all the information about the committee members that is displayed in the [teams page](https://edinburghhoppers.com/teams).

Add a new entry or replace one member's information with the other's (in case of replacement). Place the picture of the new member under `/assets/images/team/` and name the file with just the first name of the new member.

### Big events

After a big event is over, the highlighted event under [Upcoming event in the events page](https://edinburghhoppers.com/events#upcoming-event-section) should be moved to [past big events](https://edinburghhoppers.com/events#past-big-events-section) and it should be replaced with the information of the new upcoming event.

Open `pastBigEvents.yml`, located under the `_data` folder. This file contains all the information about our past big events displayed in the [events page](https://edinburghhoppers.com/events#past-big-events-section).

Open `events.html`, located under the `_pages` folder. The information for the upcoming event is under the section with class `upcoming-event-section`. Copy the name of the image file with the logo (only the name, not the whole path), the name of the event, date and link, and paste them in a new entry in the `pastBigEvents.yml` file, at the top of the file.

For the description, create a new html file with the name of the event in the `pastBigEvents` folder under `_includes`. Paste the description there inside a paragraph tag. Put the name of the html file with the description in the desc section of the new entry in `pastBigEvents.yml`.

If the information for the new upcoming event is ready, replace the information of the old event with the new (place the logo of the new event under `/assets/images/logos/`). Else, leave the information of the old event and comment out that whole section, until it can be updated.

### Sponsors

Open `sponsors.yml`, located under the `_data` folder. This file contains all the information about our sponsors displayed in the [sponsors page](https://edinburghhoppers.com/sponsors) and in the homepage.

For a new sponsors, add a new entry to the file and place the logo (png format, transparent background, preferably vertical design) under `/assets/images/sponsor-logos/`.

When a company stops sponsoring us, don't delete their entry, just comment it out, in case they sponsors us again the future.
