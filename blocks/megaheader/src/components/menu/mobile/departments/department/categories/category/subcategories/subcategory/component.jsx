import h from '@cea/h'
import * as s from '@shared/'

export default (subcategory) =>
  <li>
    <s.ArrowButton
      className={subcategory.className}
      name={subcategory.name}
      data='subcategory'
      url={subcategory.url}
      click={() => subcategory.open()}
    />
  </li>
