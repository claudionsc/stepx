import React from 'react'

export const Navbar = () => {
  return (
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">Ativo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Desativado</a>
      </li>
    </ul>
  )
}
