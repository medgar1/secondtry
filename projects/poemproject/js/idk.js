$max: 5;
$stroke-step: 7%; 
.text-copy {
  fill: none;
  stroke: white;
  stroke-width: 3px;
  
  animation: stroke-offset 9s infinite linear;
  
  @for $item from 1 through $max {
  stroke-dasharray: $stroke-step $stroke-step * ($max - 1);
    $stroke-color: nth($colors, $item);
    
    &:nth-child(#{$item}) {
      stroke: $stroke-color;
      stroke-dashoffset: $stroke-step * $item;
      }
    }
  }
