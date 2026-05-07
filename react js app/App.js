import { useState, createElement } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Императивный стиль — вычисляем значение явно, шаг за шагом
const year = new Date().getFullYear()

function App() {
  // Императивный стиль — явно описываем изменение состояния
  const [count, setCount] = useState(0)

  // Декларативный стиль — описываем ЧТО показать, а не КАК построить DOM
  return createElement(
    'div',
    null,

    createElement(
      'section',
      { id: 'center' },

      createElement(
        'div',
        { className: 'hero' },
        createElement('img', { src: heroImg, className: 'base', width: '170', height: '179', alt: '' }),
        createElement('img', { src: reactLogo, className: 'framework', alt: 'React logo' }),
        createElement('img', { src: viteLogo, className: 'vite', alt: 'Vite logo' })
      ),

      createElement(
        'div',
        null,
        createElement('h1', null, 'Get started'),
        createElement(
          'p',
          null,
          'Edit ',
          createElement('code', null, 'src/App.jsx'),
          ' and save to test ',
          createElement('code', null, 'HMR')
        )
      ),

      createElement(
        'button',
        {
          type: 'button',
          className: 'counter',
          onClick: () => setCount((c) => c + 1)
        },
        `Count is ${count}`
      ),

      createElement('div', null, year)
    ),

    createElement('div', { className: 'ticks' }),

    createElement(
      'section',
      { id: 'next-steps' },

      createElement(
        'div',
        { id: 'docs' },
        createElement('h2', null, 'Documentation'),
        createElement('p', null, 'Your questions, answered'),
        createElement(
          'ul',
          null,
          createElement(
            'li',
            null,
            createElement(
              'a',
              { href: 'https://vite.dev/', target: '_blank' },
              createElement('img', { className: 'logo', src: viteLogo, alt: '' }),
              'Explore Vite'
            )
          ),
          createElement(
            'li',
            null,
            createElement(
              'a',
              { href: 'https://react.dev/', target: '_blank' },
              createElement('img', { className: 'button-icon', src: reactLogo, alt: '' }),
              'Learn more'
            )
          )
        )
      )
    ),

    createElement('div', { className: 'ticks' }),
    createElement('section', { id: 'spacer' })
  )
}

export default App
