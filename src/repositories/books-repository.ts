import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import { prisma } from "../database";

export async function getBooks() {

  return await prisma.books.findMany();
}

export async function getBook(id: number) {
  return await prisma.books.findFirst({
    where: { id }
  });
}

export async function createBook(book: CreateBook) {
  return await prisma.books.create({
    data: book
  });


}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId } = bookReview;
 
  return await prisma.books.update({
    data: bookReview,
    where: { 
      bookId
    }
  });
}