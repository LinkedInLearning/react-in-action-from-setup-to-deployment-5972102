function Modals({ member, handleClose, handleChange }) {
  return (
    <dialog open>
      <article>
        <header>
          <button aria-label="Close" rel="prev" onClick={handleClose}></button>
          <h1>{member.name}</h1>
        </header>
        <hgroup>
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <img style={{ width: '200px' }}
              src={`images/${member.slug}.svg`}
              alt={member.name} />
            <hgroup>
              <p>{member.bio}</p>
              <hgroup style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
                justifyContent: "space-between"
              }}>
                <a href="#" role="button"
                  onClick={() => { handleChange(Number(member.id) - 1) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="none" strokeLinecap="round" strokeLinejoin="round" width={20} height={20} strokeWidth={2}> <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path> </svg> </a>
                {/* https://tablericons.com/icon/arrow-big-left */}
                <a href="#" role="button"
                  onClick={() => { handleChange(Number(member.id) + 1) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="none" strokeLinecap="round" strokeLinejoin="round" width={20} height={20} strokeWidth={2}> <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path> </svg></a>
                {/* https://tablericons.com/icon/arrow-big-right */}
              </hgroup>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  )
}

export default Modals;