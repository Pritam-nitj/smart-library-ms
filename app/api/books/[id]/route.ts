import { NextRequest } from 'next/server'
import { withAuth } from '@/lib/middleware'
import { db } from '@/lib/db'

async function deleteHandler(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.book.delete({
      where: { id: params.id }
    })

    return Response.json({ message: 'Book deleted successfully' })
  } catch (error) {
    return Response.json({ error: 'Failed to delete book' }, { status: 500 })
  }
}

export const DELETE = withAuth(deleteHandler, 'LIBRARIAN')