import h from '@cea/h'
import style from './style.css'

const profilePlaceholder = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAASUkqAAgAAAABAA4BAgA0AAAAGgAAAAAAAABEZWZhdWx0IGF2YXRhciBwcm9maWxlIGljb24uIEdyYXkgcGxhY2Vob2xkZXIuIFdvbWFu/+EFVWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMvaVN0b2NrcGhvdG8iIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSI2NjY1NDI5NDAiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFncmVlbWVudD91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0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AoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAACxwoyfagCG61DT7D/j/wBQt4P+u86p/M0AVh4r8KE7R4p0zPp/aEX/AMVQBatb6xv/APjwvoJ/+uEyv/I0ASkEHBGKACgAoAKAKes+ItB8PRiTXNXgtdwyqyv8zD2UfMfwFAGRH8W/h5I23/hIdvOPns5gD/45QBqaX4q8Ma04j0nxBZzuekSTjf8A98nn9KAL5BU4Ix9aACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAp634h0Tw3a/bNc1KO3Q/cDnLP7Ko5b8BQBwXiD48TMWg8LaQqL0Fze8k+4RTgfiT9KAOQ1fxt4u1wkan4iunVusSSeWn/fKYH6UAZWxM52jPrigBcD0oATYoYMFGR0IHIoA2NI8eeMdDIGneIrkIOkUz+amP8AdfIH4UAdj4d+O6Oy2/ivSgmePtVkCQPcoTn8QT9KAOyl8YeFodFHiF9dt/sZ4WZXzub+6F6lv9nGaAPPvFnxs1bUS1n4VhNlB0NzIAZnHt2T9T7igDiJpprmZrm5meSRzl5JHLMx9STyaAG0AIyqwwwB+tAG/wCG/iT4u8MssdtqTXFuvH2W7JdMegOcr+BA9qAPTPBnxL0DxjttEJtL4jm0mYHf/uN/F9OD7d6AOioAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKADrQBwnjj4zWuml9L8ImO5uBw963zRRn/ZH8Z9/u/WgDzTUNQv9WvH1DVLyS4nk+/LK2Sfb2HsOBQBDQAUAFABQAUAFABQAYGc4oAKACgAoAKACgABZWDqxBUgqynBB9QaAPS/hv8AFr7W8fh/xdcgSkhba/fgOeyyH19G79+eSAegkEHBHNABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUANnnhtYHurmZY4o0LSSO2FVR1JPYUAeT/EX4qXPiQyaLoEjw6d92ST7r3P1/up/s9T39AAcbQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAEAjBHFAHpnwl+I7X3l+EvEFxmYDbYXLn/WAf8ALNj/AHvQ9+nXGQD0CgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgBHdI0aWV1VEUs7scBQOSSewoA8h+JnxHl8WXB0jSZGTTIn4PQ3LD+I/7PoPxPOMAHJUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAqsyMHRyrKQVZTggjoQe1AHs3wz8cDxjo5ivXA1C0AW5HTzB2kA9+/ofqKAOloAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzH4v8AxBN9NJ4P0W4/0eJsX8yH/WuD/qx/sg9fU8duQDgaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgC/4Y8RXvhXW4NcseWibEkecCWM/eQ/UfkcHtQB7vpuo2er6fDqmnS74LiMPE3sfX0I6EdiKAJqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAOS+K/jo+F9KGlaZPjULxDtZTzBH0L+xPIX8T2oA8gAAGBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB6F8D/ABaYriTwdeyfJLulsST0YDLp+IG4e4b1oA9KoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCprutWPh3SJ9a1FiIrdNxA6uegUe5OB+NAHhGua1feIdWn1rUnzNcPuYDoo7KPYDAFAFWgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCSzvLrT7uLULKUxzQSLJE47MDkUAe9+HdctvEuh22u2oAW4j3MgP3G6Mv4EEUAXaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDyf4y+MP7Z1keHLGbNrYOfNKniSfofwUfL9S3tQBxdABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAegfArxJ5N5c+E7mT5ZwZ7QE/wAYHzqPqoB/4AfWgD0ygAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDB+Ivi3/hEPDUl5byAXc58qyHo5HL/8BHP1wO9AHiPPUkk9yTkmgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCxpGqXOiarbaxZ/621mWRBnrg8g+xGQfY0Ae/2V7balZQ6lZPuhuIlkib1VhkfzoAloAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAAAscAcmgDxX4neK/+Eq8USPbS7rS0zDa4PDAH5n/AOBH9AtAHO0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHq/wAD9fOoeG5dCmfMmnS/u8nnynyR+Tbx9MUAdrQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAc38U/E58NeE5fs8m26vSbe3weVyPnf8F7+pFAHi4AAwBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHR/CnXf7D8a2vmPiK8/0WX/AIGRtP8A32F/WgD2mgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA8b+L3iI674vktIZM2+nA28QB4L5/eN/wB9cfRRQBy9ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAAZ1IaNyrA5VgeQexoA9/8ADesr4h8P2euLjNzbq7gdA/Rh+DAj8KALtABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAZ3i3Xh4Z8NXmuZG+CH9yCOsjHag/wC+iPwzQB4ISzEs7FiTksTyT60AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHqXwJ1n7ToV3oUj5azuBJGD/ckHQfRlY/8AAqAO6oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDzz4960UgsPDcT/AH2NzOPYZVP1L/kKAPNqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDqPg9rH9leOYIHbEd9G9u+fUjcv/jygfjQB7JQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHiPxN1b+2fHN/MrZSCX7PHz0EY2nH/Atx/GgDBoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAJLO9m028h1K3/wBZbzLKn+8pDD+VAH0PHNFcRrcQHMcih0PqpGR+lAC0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUARX9/FpVhPqk2NltA8rZ9FUn+lAHzwXllYyzOWdyWdj3J5JoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA90+H17/AGh4H0q5JyRZrGT7p8n/ALLQBsUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAch8ZtVktvCr6VbyYe4G+bB58pXRT+bug9xuoA8ioAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA9k+Dk/nfD+0Tdnyppk69P3hb/2agDqKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPM/iXfNqWnazqucxrrFvpdv7LCjySfnI3/jooA8/oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA9b+Bu7/hCZM/9BKXH02R//XoA7GgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAHR48xc/3hQB5D4jLD4V23mf61vE1wbgHqJMS5z74xQBx9ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHsnwctTbeALWQjHnzTSf+Plf/AGWgDqKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPNvjJ4Wk0uzfXNOv2WzvNRWS6sCvyi4KMPNU9sjOR6nPpgA88oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgBGYKpY9hmgD37wrph0bwzp+lOuGgs41kH+3tBb9SaAL9ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHN/FyzN58P74qMmBopR+Eig/oTQB4vQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAGr4I0U+IfFlhpZTdG9wGn/AOua/M36KR+NAHvDHcSx7mgBKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAKfiK0jv/AA7qFlKMrLYzKfxQ0AfPyncob1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHpXwK0DZBc+JJo+WJhhJHbgt+WB/30aAPQqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCn4g1G10jQb3U73/AFUNq7MB/FxgAe5JA/GgD5+QFUCnsKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA1vB/hyXxHqhUws9vbJ5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'

export default (props) =>
  <section className={style.jumbotron}>
    <img className={style.jumbotron__banner} src={props.banner ?? '//bucket-mais.s3.amazonaws.com/private/cea/banners/3b710abcf35480c2c972b00ac34b6206aeae12ad0aa11b8d-bannerprincipal-04.png'} alt={props.description ?? 'Sem capa da loja'} />
    <img className={style.jumbotron__thumbnail} src={props.thumbnail ?? profilePlaceholder} alt={props.name ?? 'Sem icone da loja'} />
    <h1 className={style.jumbotron__name}>{props.name ?? 'Bem vinde!'}</h1>
    <p className={style.jumbotron__description}>{props.description ?? 'Produtos que você vai amar 😍🥰'}</p>
  </section>
