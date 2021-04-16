import h, { Show } from '@cea/h'
import * as s from '@shared/'

export default (categories) =>
  <s.Modal className={categories.hide}>
    <ul>
      <li>
        <s.Breadcrumb collection={categories.breadcrumb} click={() => categories.back()} />
        <s.Close />
      </li>

      <Show if={categories.url}>
        <li>
          <s.ArrowButton
            className='notcategory'
            name='mostar tudo'
            url={categories.url}
            click={() => location.assign(categories.url)}
          />
        </li>
      </Show>

      {categories.collection}
    </ul>
  </s.Modal>
