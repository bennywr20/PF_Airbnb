const TitleAndDescription = (props) => {
    return (
        <div>
            <div>
      <div className="grid grid-cols-1 font-cairo gap-2 w-3/4 mx-auto">
        <div>
          <div className="text-2xl">Agregá un título y una descripción a tu propiedad</div>
          <p>No te preocupes si no te gustan, podes cambiarlo más adelante</p>
          <input 
          className="pl-8 w-3/4 h-10 border rounded-md mb-2" 
          type="text" 
          placeholder="Ingresa un título" 
          maxLength={200}
          name="title"
          onChange={props.handleInputChange}
          value={props.formData.title} />
        </div>
        <div>
          <textarea 
          className="pl-8 w-3/4 h-20 border rounded-md mb-2" 
          placeholder="¿Qué hace que tu propiedad sea especial? ¡Contanos!" 
          maxLength={600} 
          name="description"
          onChange={props.handleInputChange}
          value={props.formData.description}></textarea>
        </div>
        <div className="col-span-1 font-cairo-play flex justify-start ml-10">
          <button className="border border-argentina rounded p-1 w-32 mt-4 mr-2" onClick={props.previousStep}>Anterior</button>
          <button className="border border-argentina rounded p-1 w-32 mt-4" onClick={props.nextStep}>Siguiente</button>
        </div>
      </div>
    </div>
        </div>
    )
}
export default TitleAndDescription