// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// schemas
import pages from "./pages";
import characters from "./characters";
import locations from "./locations";
import story from "./story";
import magicAttacks from "./magicAttacks";
import magic from "./magic";
import ideas from "./ideas";
import timeline from "./timeline";
import worldBuilding from "./worldBuilding";
import novels from "./novels";
import volumes from "./volumes";
import accounts from "./accounts";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    pages,
    characters,
    locations,
    story,
    magicAttacks,
    magic,
    ideas,
    timeline,
    worldBuilding,
    novels,
    volumes,
    accounts,
  ]),
});
