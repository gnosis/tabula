import { Article, PermissionAction, Publications } from "../../models/publication"

export interface Publication extends Omit<Publications, "id"> {
  action: "publication/create" | "publication/update" | "publication/delete" | "publication/permissions"
}

export interface PosterArticle extends Article {
  action: "article/create" | "article/update" | "article/delete" | "article/permissions"
  publicationId: string
  authors?: string[]
}

export interface PosterPermission {
  action: "publication/permissions"
  id: string
  account: string
  permissions: PermissionAction
}
