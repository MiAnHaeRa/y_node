export function GET(req, { params }) {
    const { userid } = params;
    console.log(params);
    return Response.json({ userid })
}