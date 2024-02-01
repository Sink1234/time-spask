import {type NextRequest, NextResponse} from "next/server";


export async function GET(request: NextRequest, response: NextResponse) {
    const params = request.nextUrl.searchParams


    return NextResponse.json({})
}