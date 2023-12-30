- Key Prop

# Key Prop

- Key es un atributo especial
- Sirve para identificar de manera unica cada elemento de un array
- Se emplea en el metodo de arrays ".map()"

Ejemplo

   const [items, setItems] = useState([ {obj}, {obj2} ])
   <!-- state = array de objetos llamado "items" -->
   <!-- cada "obj" tiene varias propiedades-->

   return (
      <ul>
         {items.map( item =>(
            <li key={item.name}>
               <span>{item.name}</span>
               <span>{item.quantity}</span>
            </li>
         ))}
      </ul>
   )
   <!-- Por cada item del array le asigna una key unica -->
   <!-- Es decir; recorre el array y crea un <li> por cada "obj" -->
   <!-- Dentro de la lista crea un elemento con el valor de sus propiedades -->