import h from '@cea/h'
import * as s from '@shared/'

export default (category) =>
  <li>
    <s.ArrowButton
      className={category.className}
      name={category.name}
      data='category'
      url={category.url}
      click={() => category.open()}
    />
    {category.subcategories}
  </li>
