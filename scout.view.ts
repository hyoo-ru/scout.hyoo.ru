namespace $.$$ {
	export class $hyoo_scout extends $.$hyoo_scout {

		id( id : string ) {
			return id
		}

		gist_links() {
			return this.data().map( gist => this.Gist_link( gist.id() ) )
		}

		@ $mol_mem_key
		gist( id : string ) {
			return this.data().find( gist => gist.id() === id ) as $hyoo_scout_gist
		}

		gist_icon( id : string ) {
			return this.gist( id ).icon()
		}

		gist_title( id : string ) {
			return this.gist( id ).title()
		}

		gist_content( id : string ) {
			return this.gist( id ).content()
		}

		gist_stages() {
			return this.gist_current().stages().map( stage => this.Gist_stage( stage ) )
		}

		gist_types() {
			return this.gist_current().types().map( stage => this.Gist_type( stage ) )
		}

		gist_ages() {
			return this.gist_current().ages().map( stage => this.Gist_age( stage ) )
		}

		gist_current() {

			const id = this.$.$mol_state_arg.value( 'gist' )
			if( !id ) return null

			return this.gist( id )
		}

		pages() {
			return [
				// this.Filters() ,
				this.Gists() ,
				... this.gist_current() ? [ this.Gist( this.gist_current().id() ) ] : [] ,
			]
		}

	}
}
