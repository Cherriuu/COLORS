# COLORS UML diagrams

These diagrams are based on the real implementation of the COLORS Labs 1–3 app on the main branch.

| Diagram | Editable Graphviz source | Rendered PNG | Rendered SVG |
|---|---|---|---|
| Use Case | [usecase.dot](usecase.dot) | [usecase.png](usecase.png) | [usecase.svg](usecase.svg) |
| Activity | [activity.dot](activity.dot) | [activity.png](activity.png) | [activity.svg](activity.svg) |
| Class (module/structure view) | [class.dot](class.dot) | [class.png](class.png) | [class.svg](class.svg) |

## Render locally

Sources are Graphviz DOT files (not PlantUML). From this directory:

    dot -Tpng usecase.dot -o usecase.png
    dot -Tpng activity.dot -o activity.png
    dot -Tpng class.dot -o class.png

The GitHub Actions workflow also regenerates PNG and SVG images after diagram source changes.

## Accuracy notes

- Implemented user actions: log in, add a color, search saved colors, log out. There is no sign-up, color editing/deletion, or admin interface in this code.
- Successful login stores firstName, lastName, and userId in a 20-minute browser cookie; color.html calls readCookie() on page load.
- Login.php selects from Users, AddColor.php inserts into Colors, and SearchColors.php selects from Colors with both a substring match and UserID filter.
- No JavaScript/PHP classes are declared in the repository. The Class Diagram uses explicit stereotypes for actual HTML pages, a JavaScript module, PHP endpoint scripts, and SQL tables, rather than inventing object classes.
- No database schema/DDL is included. Displayed table columns are sourced from the SQL statements. Colors.UserId to Users.ID is a logical association; an enforced foreign key and exact column types are not verified.
- Known behavior gap: a search with no matches receives a JSON error without results, but searchColor() tries to read jsonObject.results.length. The add-color UI reports success for HTTP 200 without checking the JSON error field.
