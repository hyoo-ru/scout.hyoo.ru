namespace $.$$ {
	export class $hyoo_scout extends $.$hyoo_scout {

		id( id : string ) {
			return id
		}

		gist_links() {
			return this.data()
			.filter( gist => {

				const tags = gist.tags()
				
				aspect : for( const aspect in tags ) {

					for( const tag of tags[ aspect ] ) {
						if( this.filter_tag_checked({ aspect , tag }) ) continue aspect
					}
					
					return false
				}
				
				return true
			} )
			.map( gist => this.Gist_link( gist.id() ) )
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

		tag_title( key : { aspect : string , tag : string } ) {
			return key.tag
		}

		gist_aspects() {
			return Object.keys( this.gist_current().tags() ).map( aspect => this.Gist_aspect( aspect ) )
		}

		gist_aspect_tags( aspect : string ) {
			return this.gist_current().tags()[ aspect ].map( ( tag : string ) => this.Gist_tag({ aspect , tag }) )
		}

		gist_current() {

			const id = this.$.$mol_state_arg.value( 'gist' )
			if( !id ) return null

			return this.gist( id )
		}

		filter_aspects() {
			return Object.keys( $hyoo_scout_gist.make({}).tags() ).map( aspect => this.Filter_aspect( aspect ) )
		}

		@ $mol_mem_key
		filter_aspect_tags( aspect : string ) {

			const values = new Set< string >()
			
			for( const gist of this.data() ) {
				for( const value of gist.tags()[ aspect ] ) {
					values.add( value )
				}
			}
			
			return [ ... values ].map( ( tag : string ) => this.Filter_tag({ aspect , tag }) )
		}

		@ $mol_mem_key
		filter_tag_checked( key : { aspect : string , tag : string } , next? : boolean ) {
			next = this.$.$mol_state_local.value( `${ this }.filter_tag_checked(${ JSON.stringify( key ) })` , next )
			if( next == null ) next = super.filter_tag_checked( key )
			return next
		}

		pages() {
			return [
				this.Filter() ,
				this.Gists() ,
				... this.gist_current() ? [ this.Gist( this.gist_current().id() ) ] : [] ,
			]
		}

	}
}
