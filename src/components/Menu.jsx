import MenuItem from "./Menu-item";

export default function Menu(){
  return (
    <menu-gauche className="menu-gauche">
        <MenuItem name="Dashboard" icon="CheckOutlined" />
        <MenuItem name="Registre risques" icon="CloseOutlined" />
        <MenuItem name="Calculs" icon="ReloadOutlined"/>
        <MenuItem name="Par projets" icon="SearchOutlined"/>
    </menu-gauche>
  )
}
