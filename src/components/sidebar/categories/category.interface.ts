interface CategoryContentI {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  text: string,
  href?: string,
}

interface CategoryI {
  title: string,
  items: CategoryContentI[]
}

export default CategoryI;