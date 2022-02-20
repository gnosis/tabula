// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("publisher", Value.fromBytes(Bytes.empty()));
    this.set("article", Value.fromString(""));
    this.set("authors", Value.fromStringArray(new Array(0)));
    this.set("postedOn", Value.fromBigInt(BigInt.zero()));
    this.set("lastUpdated", Value.fromBigInt(BigInt.zero()));
    this.set("tags", Value.fromStringArray(new Array(0)));
    this.set("title", Value.fromString(""));
    this.set("description", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Post entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get publisher(): Bytes {
    let value = this.get("publisher");
    return value!.toBytes();
  }

  set publisher(value: Bytes) {
    this.set("publisher", Value.fromBytes(value));
  }

  get article(): string {
    let value = this.get("article");
    return value!.toString();
  }

  set article(value: string) {
    this.set("article", Value.fromString(value));
  }

  get authors(): Array<string> {
    let value = this.get("authors");
    return value!.toStringArray();
  }

  set authors(value: Array<string>) {
    this.set("authors", Value.fromStringArray(value));
  }

  get postedOn(): BigInt {
    let value = this.get("postedOn");
    return value!.toBigInt();
  }

  set postedOn(value: BigInt) {
    this.set("postedOn", Value.fromBigInt(value));
  }

  get lastUpdated(): BigInt {
    let value = this.get("lastUpdated");
    return value!.toBigInt();
  }

  set lastUpdated(value: BigInt) {
    this.set("lastUpdated", Value.fromBigInt(value));
  }

  get tags(): Array<string> {
    let value = this.get("tags");
    return value!.toStringArray();
  }

  set tags(value: Array<string>) {
    this.set("tags", Value.fromStringArray(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get image(): string | null {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (!value) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(<string>value));
    }
  }
}