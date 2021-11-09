# Surprise Santa

OH OH OH ! A secret surprise santa for your react projects.
This idea came up after looking for ways of adding some christmas spirit to our team's monitoring dashboards.
[Here's an example of it in action](https://www.youtube.com/watch?v=ZSL6RNKKUN4)

![Surprise Santa](https://media.giphy.com/media/DOG65BvYvpSHvdfYTC/giphy.gif)

## Installation
```
yarn add surprise-santa@latest
```

### Usage

Import the following component:

```
import SurpriseSanta from 'surprise-santa';
```

And place it in the root of your main component.
You can also define the minimum and maximum time between animations:

```
<SurpriseSanta minTime={5} maxTime={30} />
```

### See example in action

```
yarn build
cd example
yarn install
yarn start
```

### Editing the npm module

Inside the main module:
```
yarn build
yarn link
```

Then inside the example project:
```
yarn link "surprise-santa"
yarn start
```

![Example Santa](https://github.com/pl4za/surprise-santa/blob/65b1abe02cea376b0633388128ea572b55bc8e4d/src/example.jpg)

## Built With

* [React](https://reactjs.org/) - The web framework used
* [yarn](https://yarnpkg.com/) - Package manager
* [create-react-library](https://www.npmjs.com/package/create-react-library) - Used to generate a base project for npm library development

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Jason Costa** - [Pl4za](https://github.com/pl4za)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
