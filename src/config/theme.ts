interface Color {
   name: ColorKey
   scheme: string[]
}

enum ColorKey {
   PURPLE = 'purple',
   GREEN = 'green',
   BLUE = 'blue',
   PINK = 'pink',
   YELLOW = 'yellow',
   ORANGE = 'orange',
   RED = 'red',
   PRIMARY = 'primary',
   DARK = 'dark',
   GREY = 'grey',
   LIGHT_GREY = 'lightGrey',
   STROKE = 'stroke',
   LINE = 'line',
   WHITE = 'white',
}

const shades: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const purple: Color = {
   name: ColorKey.PURPLE,
   scheme: [
      '#f0effb',
      '#d1cdf1',
      '#bbb4eb',
      '#9d92e2',
      '#897ddc',
      '#6c5dd3',
      '#6255c0',
      '#4d4296',
      '#3b3374',
      '#2d2759',
   ],
}

const green: Color = {
   name: ColorKey.GREEN,
   scheme: [
      '#e9f7ed',
      '#bae5c8',
      '#99d8ae',
      '#6bc689',
      '#4ebb72',
      '#22aa4f',
      '#1f9b48',
      '#187938',
      '#135e2b',
      '#0e4721',
   ],
}

const blue: Color = {
   name: ColorKey.BLUE,
   scheme: [
      '#e8f3fb',
      '#b7d9f4',
      '#94c7ee',
      '#63ade6',
      '#459de1',
      '#1685da',
      '#1479c6',
      '#105e9b',
      '#0c4978',
      '#09385c',
   ],
}

const red: Color = {
   name: ColorKey.RED,
   scheme: [
      '#fcebeb',
      '#f5c0c0',
      '#f1a2a2',
      '#ea7878',
      '#e65d5d',
      '#e03535',
      '#cc3030',
      '#9f2626',
      '#7b1d1d',
      '#5e1616',
   ],
}

const orange: Color = {
   name: ColorKey.ORANGE,
   scheme: [
      '#fff1e6',
      '#ffd4b0',
      '#ffbf8a',
      '#ffa154',
      '#ff8f33',
      '#ff7300',
      '#e86900',
      '#b55200',
      '#8c3f00',
      '#6b3000',
   ],
}

const yellow: Color = {
   name: ColorKey.YELLOW,
   scheme: [
      '#fffce6',
      '#fff4b0',
      '#ffef8a',
      '#ffe854',
      '#ffe433',
      '#ffdd00',
      '#e8c900',
      '#b59d00',
      '#8c7a00',
      '#6b5d00',
   ],
}

const pink: Color = {
   name: ColorKey.PINK,
   scheme: [
      '#feeaf4',
      '#fdbfdd',
      '#fc9fcc',
      '#fb74b5',
      '#fa59a7',
      '#f92f91',
      '#e32b84',
      '#b12167',
      '#891a50',
      '#69143d',
   ],
}

// Need optimize
const mapColorToPalette = (shades: number[], ...colors: Color[]) => {
   const result: Record<string, Record<string, string>> = {}
   for (const color of colors) {
      const colorName = color.name
      result[colorName] = {}
      const colorScheme = color.scheme
      for (let i = 0; i < colorScheme.length; i++) {
         result[colorName][`shade_${shades[i]}`] = colorScheme[i]
      }
   }

   return {
      primary: '#6C5DD3',
      dark: '#131626',
      grey: '#4E4E4E',
      lightGrey: '#9FA0A6',
      stroke: '#EAEAEA',
      line: '#F4F4F4',
      white: '#FFFFFF',
      background: '#FAFAFA',
      ...result,
   }
}

export const colorPalette: any = {
   ...mapColorToPalette(shades, purple, green, blue, red, orange, yellow, pink),
}

export const typography = {
   pc: {
      hero: 'typography-pc-hero',
      h1: 'typography-pc-h1',
      h2: 'typography-pc-h2',
      h3: 'typography-pc-h3',
      h4: 'typography-pc-h4',
      h5: 'typography-pc-h5',
      h6: 'typography-pc-h6',
      h7: 'typography-pc-h7',
      s1: 'typography-pc-s1',
      s2: 'typography-pc-s2',
      s3: 'typography-pc-s3',
      s4: 'typography-pc-s4',
      b1: 'typography-pc-b1',
      b2: 'typography-pc-b2',
      b3: 'typography-pc-b3',
      descReg: 'typography-pc-desc-reg',
      descSemi: 'typography-pc-desc-semi',
      helpReg: 'typography-pc-help-reg',
      helpSemi: 'typography-pc-help-semi',
   },
   mb: {
      h1: 'typography-mb-h1',
      h2: 'typography-mb-h2',
      h3: 'typography-mb-h3',
      h4: 'typography-mb-h4',
      h5: 'typography-mb-h5',
      s1: 'typography-mb-s1',
      s2: 'typography-mb-s2',
      s3: 'typography-mb-s3',
      b1: 'typography-mb-b1',
      b2: 'typography-mb-b2',
      b3: 'typography-mb-b3',
      descReg: 'typography-mb-desc-reg',
      descSemi: 'typography-mb-desc-semi',
      helpReg: 'typography-mb-help-reg',
      helpSemi: 'typography-mb-help-semi',
   },
}

export const banner = {
   largeText: 'banner large-text',
   mediumText: 'banner medium-text',
   smallText: 'banner small-text',
}
