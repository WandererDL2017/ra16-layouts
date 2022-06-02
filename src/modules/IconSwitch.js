function IconSwitch({icon, onSwitch}) {
  return (
    <div className='switch'>
      <span className='material-icons' onClick={e => { onSwitch(e.target.innerText === 'view_module' ? 'view_list' : 'view_module') }}>{icon}</span>
    </div>
  );
}

export default IconSwitch;