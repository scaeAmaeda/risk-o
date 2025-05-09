import MenuItem from "./Menu-item";

export default function Menu(){
  return (
    <menu-gauche className="menu-gauche">
        <MenuItem name="Dashboard" />
        <MenuItem name="Registre risques" />
        <MenuItem name="Calculs" />
        <MenuItem name="Par projets" />
    </menu-gauche>
  )
}
