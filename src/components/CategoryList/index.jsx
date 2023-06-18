import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const CategoryListWrapper = styled.div`
  margin-bottom: 16px;
  word-break: break-all;
`

const CategoryLink = styled.div`
  display: inline-block;
  padding: 9.6px 11.2px;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: ${props =>
    props.selected
      ? props.theme.colors.selectedCategoryBackground
      : props.theme.colors.bodyBackground};
  color: ${props =>
    props.selected
      ? props.theme.colors.selectedCategoryText
      : props.theme.colors.categoryText};
  text-decoration: none;
  font-size: 30px;
  transition: all 0.2s;

  &:hover {
    background-color: ${props =>
      props.selected
        ? props.theme.colors.hoveredSelectedCategoryBackground
        : props.theme.colors.hoveredCategoryBackground};
  }
`

const CategoryListWrapper2 = styled.div`
  word-break: break-all;  
`

const CategoryLink2 = styled.div`
  display: inline-block;
  padding: 9.6px 11.2px;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: ${props =>
    props.selected
      ? props.theme.colors.bodyBackground
      : props.theme.colors.bodyBackground};
  color: ${props =>
    props.selected
      ? props.theme.colors.selectedCategoryText
      : props.theme.colors.categoryText};
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    background-color: ${props =>
      props.selected
        ? props.theme.colors.seriesBackground
        : props.theme.colors.seriesBackground};
  }
`

const spaceToDash = text => {
  return text.replace(/\s+/g, "-")
}

const CategoryList = ({ categoryList, count, selected }) => {
  if (!categoryList) return null


  if (!count) {
    return (
      <CategoryListWrapper2>
          <Link key={JSON.stringify({ categoryList})} to={`/categories?q=${categoryList}`}>
            <CategoryLink2>{spaceToDash(categoryList)}</CategoryLink2>
          </Link>
      </CategoryListWrapper2>
    )
  }

  

  return (
    <CategoryListWrapper>
      {categoryList.map((category, i) => (
        <Link
          key={JSON.stringify({ category, i })}
          to={
            selected === category.fieldValue ? "/categories" : `/categories?q=${category.fieldValue}`
          }
        >
          <CategoryLink selected={category.fieldValue === selected}>
            {spaceToDash(category.fieldValue)} ({category.totalCount})
          </CategoryLink>
        </Link>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
