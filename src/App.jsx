const persona = {
  nombre: 'Arleth Juarez Velasco',
  edad: 22,
  fecha_nacimiento: '03/11/2001',
  lugar_nacimiento: 'Puerto Escondido',
  signo: 'Escorpio',
  profesion: 'Estudiante',
  pasatiempos: [

    'escuchar musica',
    'dormir',

  ],
}

function App(){
  return (
    <div>
    <h1>Informacion Personal</h1>
    <hr />
    <ul>
      <li>Nombre: {persona.nombre}</li>
      <li>Edad: {persona.edad}</li>
      <li>Fecha de nacimiento: {persona.fecha_nacimiento}</li>
      <li>Lugar de nacimiento: {persona.lugar_nacimiento}</li>
      <li>Signo: {persona.signo}</li>
      <li>Profesion: {persona.profesion}</li>
      <li>Pasatiempo:
        <ul>
          {
            persona.pasatiempos.map((pasatiempo) => {
              return <li key={pasatiempo}>
                {pasatiempo}
              </li>
            })
          }
          {/*<li>{persona.pasatiempos[0]}</li>
           <li>{persona.pasatiempos[1]}</li>
           <li>{persona.pasatiempos[2]}</li>
        <li>{persona.pasatiempos[3]}</li>*/}
        </ul>
        </li>
      </ul>
    </div>
  )
}
export default App
