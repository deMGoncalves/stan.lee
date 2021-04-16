import h from '@cea/h'
import * as s from '@shared/'

export default (subcategories) =>
  <s.Modal className={subcategories.hide}>
    <ul>
      <li>
        <s.Breadcrumb collection={subcategories.breadcrumb} click={() => subcategories.back()} />
      </li>
      {subcategories.collection}
    </ul>
  </s.Modal>
