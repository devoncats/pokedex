# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  // const getAll = async (limit = 20) => {
  //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
  //   const data = await response.json()

  //   const promises = data.results.map(async (pokemon) => {
  //     const response = await fetch(pokemon.url)
  //     const data = await response.json()
  //     return data
  //   })
  //   const results = await Promise.all(promises)
  //   console.log(results)
  // }

  // useEffect(() => {
  //   getAll()
  // }, [])

  if (type1 && type2 == 'rock') {
    multipliyer = 4
  }